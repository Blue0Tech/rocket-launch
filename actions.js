AFRAME.registerComponent('camera-zoom-out',{
    schema: {
        move_z: {type:'number',default:0.01}
    },
    tick: function() {
        var move_z = this.data.move_z;
        var space_pos = this.el.getAttribute('position');
        space_pos.z += move_z;
        this.el.setAttribute('position',{x:space_pos.x,y:space_pos.y,z:space_pos.z});
    }
});

AFRAME.registerComponent('move_rocket',{
    schema: {
        move_y: {type:'number',default:0.1}
    },
    tick: function() {
        var move_y = this.data.move_y;
        var pos = this.el.getAttribute('position');
        pos.y += move_y;
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z});
    }
});

AFRAME.registerComponent('falldown',{
    schema: {
        move_y: {type:'number',default:0.004},
        isClicked: {type:'boolean',default:false}
    },
    tick: function() {
        var move_y = this.data.move_y;
        window.addEventListener("click",e=>{
            this.data.isClicked = true;
        });
        if(this.data.isClicked) {
            var pos = this.el.getAttribute('position');
            pos.y -= move_y;
            this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z});
        }
    }
});