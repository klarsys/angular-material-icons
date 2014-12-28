angular.module('demoapp', ['ngMdIcons'])
	.controller('democtrl', function($scope) {
		var icons = ['home', 'alarm', 'favorite', 'help', 'shop', 'call', 'email', 'send', 'storage', 'usb', 'flight', 'share'];
		var colors = ['#abcdef', 'aqua', 'deepskyblue', 'yellow', 'springgreen', 'lightgreen', 'orchid', 'goldenrod', 'wheat', '#cc99cc'];
		$scope.icon = icons[0];
		$scope.fill = colors[0];

		setInterval(function() {
			if (Math.random() < 0.5)
				$scope.icon = icons[Math.floor(Math.random() * icons.length)];
			else
				$scope.fill = colors[Math.floor(Math.random() * colors.length)];
			$scope.$apply();
		}, 1700);
	});
