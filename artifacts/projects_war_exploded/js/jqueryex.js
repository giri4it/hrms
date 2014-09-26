/*jslint browser: true, sloppy: true, nomen: true, maxerr: 50, indent: 4, plusplus: true */
/*global define,require,window,parent,alert,describe,beforeEach,it,expect,afterEach,loadFixtures */
define([
    'jquery'
], function ($) {

    /*
     * Let attr() (no arguments) return a map
     */

    var _old = $.fn.attr,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i,
        manipulation_rcheckableType = /^(?:checkbox|radio)$/i;
    $.fn.attr = function () {
        var a, aLength, attributes,   map;
        if (this[0] && arguments.length === 0) {
            map = {};
            attributes = this[0].attributes;
            aLength = attributes.length;
            for (a = 0; a < aLength; a++) {
                map[attributes[a].name] = attributes[a].value;
            }
            return map;
        }
        return _old.apply(this, arguments);
    };

    /*
     * Jquery trim doesn't handle IE. So extending it.
     */
    $.trim = function (text) {
        return text ? text.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, '') : text;
    };

    /*
     * Needed for the CSS special characters
     * "To use any of the meta-characters ( such as !"#$%&'()*+,./:;<=>?@[\]^`{|}~ ) as a literal part of a name,
     * it must be escaped with with two backslashes. For example, an element with id="foo.bar",
     * can use the selector $("#foo\\.bar")."
     */
    $.escapeSelector = function (str) {
        return str && str.constructor === String ? str.replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g, '\\$&') : str;
    };

    /*
     * Needed for serialising the disabled fields. Mainly for radio buttons as there isn't a clean solution. 
     */
    $.fn.extend({
        serializeWithDisabled: function () {
            return $.param(this.serializeArrayWithDisabled());
        },
        serializeArrayWithDisabled: function () {
            return this.map(function () {
                // Can add propHook for "elements" to filter or add form elements
                var elements = $.prop(this, "elements");
                return elements ? $.makeArray(elements) : this;
            })
                .filter(function () {
                    var type = this.type;
                    // We get all of them including the disabled.
                    return this.name && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                        (this.checked || !manipulation_rcheckableType.test(type));
                })
                .map(function (i, elem) {
                    var val = $(this).val();

                    return val === null ?
                            null :
                            $.isArray(val) ?
                                    $.map(val, function (val) {
                                        return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                                    }) :
                                    { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                }).get();
        }
    });

    /* 
     * Note that all crumbs bar the last collapse.  The penultimate crumb collapses or not depending on the 
     * option 'collapsePenultimateCrumb'.
     * Expected structure is <ul><li>*<a>
     * Usage: .collapsibleBreadcrumbs([mode], [options])
     *        Mode is create or destroy
     *        Options are for overriding default collapsedWidth and collapsePenultimateCrumb  
     */
    $.fn.extend({
        collapsibleBreadcrumbs: function () {

            var isString = function (obj) {
                    return Object.prototype.toString.call(obj) === '[object String]';
                },
                isObject = function (obj) {
                    return Object.prototype.toString.call(obj) === '[object Object]';
                },
                $list = $(this),
                args = Array.prototype.slice.call(arguments),
                mode = (args.length > 0 && isString(args[0])) ? args[0] : 'create',
                options = args.length > 1 ? args[1] : (args.length > 0 && isObject(args[0])) ? args[0] : {},
                settings = $.extend({
                    collapsedWidth: 14,
                    collapsePenultimateCrumb: true
                }, options),
                $listitems = $list.children('li'),
                $anchors = $listitems.children('a'),
                count = $listitems.length,
                countToCollapseUpTo = settings.collapsePenultimateCrumb ? count - 1 : count - 2;

            // Don't handle unexpected DOM 
            if (count !== $anchors.length) {
                return;
            }
            if (count !== $list.children().length) {
                return;
            }

            if (mode === 'destroy') {
                $listitems.off('mouseleave mouseenter');
            } else if (mode === 'create') {

                $anchors.css('white-space', 'nowrap').css('float', 'left');
                $anchors.each(function (i) {
                    if (i < countToCollapseUpTo) {
                        $(this).css('overflow', 'hidden');
                        $(this).attr('init-width', $(this).width());
                        $(this).width(settings.collapsedWidth);
                    }
                });
                $listitems.each(function (i, listitem) {
                    if (i < countToCollapseUpTo) {
                        $(listitem).on('mouseenter', function () {
                            var initWidth = $(this).children('a').attr('init-width');
                            $(this).children('a').stop();
                            $(this).children('a').animate({width: initWidth}, { duration: 100, easing: 'swing', queue: false });
                        });
                        $(listitem).on('mouseleave', function () {
                            $(this).children('a').stop();
                            $(this).children('a').animate({width: settings.collapsedWidth}, { duration: 50, easing: 'swing', queue: false });
                        });
                    }
                });
            }
        }
    });

    return $;

});

