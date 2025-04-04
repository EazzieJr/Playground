import Experience from "../Experience";

export default class CircularPlanes{
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene 
		this.time = this.experience.time 
		this.debug = this.experience.debug 

		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('Planes')
		}
	}
}