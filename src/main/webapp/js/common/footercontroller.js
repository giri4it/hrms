/**
 * Created by gireesh.babu on 24/10/14.
 */

define(['../app',
    'marionette'], function (AppManager, Marionette) {

    var FooterController = Marionette.Controller.extend( {
        showFooter: function () {
            require(['common/footerview'], function (FooterView) {

                var view = new FooterView();
                AppManager.footerRegion.show(view);
                //view.showAccordion();
            });
        }
    });

    return FooterController;
});
