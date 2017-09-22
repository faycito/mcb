import { Component, Renderer } from "@angular/core";

require('./home.page.scss');
let LOGO = require('./../../assets/img/home/logo.svg');
let VIDEO = require('./../../assets/img/home/kitchen.jpg');
let RYV = require('./../../assets/img/home/replacement-windows.jpg');
let PHONE = require('./../../assets/img/home/hand.png');

@Component({
	selector: 'home-page',
	template: require('./home.page.html')
})
export class HomePage {
	logo = LOGO;
	video = VIDEO;
	ryv = RYV;
	phone = PHONE;
	constructor(
		private _renderer: Renderer
	) { }

	ngAfterViewInit() {
	}

}

