var serverSystem = server.registerSystem(0, 0);

// Setup which events to listen for
serverSystem.initialize = function () {

}

let tickNumber = 0;

// per-tick updates
serverSystem.update = function() {
	if(tickNumber === 50) {
		this.createNPC("fallmountquests:vindicator", -25, 67, -50);
	}

	tickNumber++;
}

serverSystem.createNPC = function (identifier, posX, posY, posZ) {
    let npc = this.createEntity("entity", identifier);

    // Add a position component
    let posComponent = this.createComponent(npc, "minecraft:position");
    // Set the position
    posComponent.data.x = posX;
    posComponent.data.y = posY;
    posComponent.data.z = posZ;
    // Apply the changes to the position component
    this.applyComponentChanges(npc, posComponent);
};