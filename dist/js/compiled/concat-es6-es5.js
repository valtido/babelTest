'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = (function () {
	function Animal() {
		_classCallCheck(this, Animal);
	}

	_createClass(Animal, [{
		key: 'constuctor',
		value: function constuctor(name) {
			this.name = name;
		}
	}]);

	return Animal;
})();

var a = new Animal('valtid');
console.log(a.name);

var Plant = (function () {
	function Plant() {
		_classCallCheck(this, Plant);
	}

	_createClass(Plant, [{
		key: 'constuctor',
		value: function constuctor(name) {
			this.name = name;
		}
	}]);

	return Plant;
})();

var a = new Plant('valtid');
console.log(a.name);
//# sourceMappingURL=concat-es6-es5.js.map
