function pubSub(url, imagePath, description) {

    this._url = url;
    this._imagePath = imagePath;
    this._description = description;
    this.eventHandlers = {

    };

    this.subscribe = function(eventName, handler) {
        if (this.eventHandlers[eventName] == undefined) this.eventHandlers[eventName] = [];

        this.eventHandlers[eventName].push(handler);
    };

    this.publish = function(eventName) {
        for(var i = 0; i < this.eventHandlers[eventName].length; i++) {
            this.eventHandlers[eventName][i](this._url)
        }
    }
}
document.addEventListener('click', function(event) {
   console.log(event.type);
   pubExample.publish(event.type);
});
var pubExample = new pubSub('someUrl', 'imagePath', 'description');

pubExample.subscribe('someEvent', function(url) {console.log(url)});
pubExample.publish('someEvent');










var members = [{gender: 'man', name: 'john'}, {gender: 'woman', name: 'jane'}];

function addMember(gender, name) {
    members.push({gender: gender, name: name})
}
function getWomanName() {
    var womanMember =  members.filter(function(member) {
        return member.gender == 'woman'
    });
    return womanMember.map(function(woman) {
        return woman.name
    })
}