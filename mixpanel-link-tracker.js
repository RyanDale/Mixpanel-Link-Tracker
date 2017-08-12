(function () {
    document.addEventListener('DOMContentLoaded', function () {
        document.body.addEventListener('click', function (event) {
            let element = event.target || event.srcElement,
                eventName = element.getAttribute('mixpanel-event');

            if (eventName) {
                let properties = element.getAttribute('mixpanel-properties'),
                    mixPanel = window.mixpanel;

                if (mixPanel) {
                    mixPanel.track(eventName, JSON.parse(properties));
                } else {
                    console.warn('Mixpanel not found');
                }
            }
        });
    });
})();
