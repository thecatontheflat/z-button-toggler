angular.module("zButtonToggler", [])

    .factory("zButtonToggler", function () {
        return {
            setOriginLabel: function (buttonEvent) {
                var button = angular.element(buttonEvent.target);

                button.html(button.data('original'));
                button.attr('disabled', false);
            }
        };
    })

    .directive("zButton", function () {
        return function (scope, element, attributes) {
            var msg = 'Loading...';

            scope.originalLabel = '';
            element.on('click', function () {
                scope.originalLabel = element.html();
                element.attr('disabled', true);
                element.html(msg).data('original', scope.originalLabel);
            });
        };
    });