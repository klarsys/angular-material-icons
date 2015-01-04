angular.module('demoapp', ['ngMdIcons'])
	.controller('democtrl', function($scope) {
		var icons = ['home', 'alarm', 'favorite', 'help', 'shop', 'call', 'email', 'send', 'storage', 'usb', 'flight', 'share'];
		var colors = ['#abcdef', 'aqua', 'deepskyblue', 'yellow', 'springgreen', 'lightgreen', 'orchid', 'goldenrod', 'wheat', '#cc99cc'];
		$scope.icon = icons[0];
		$scope.fill = colors[0];
		$scope.size = 36;

		setInterval(function() {
			var random = Math.random();
			if (random < 0.3)
				$scope.icon = icons[Math.floor(Math.random() * icons.length)];
			else if (random < 0.7)
				$scope.fill = colors[Math.floor(Math.random() * colors.length)];
			else
				$scope.size = Math.floor(26 + Math.random() * 20);
			$scope.$apply();
		}, 1700);
	});
