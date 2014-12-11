import Ember from "ember";

var IndexRoute = Ember.Route.extend({
    model: function() {
        return new Ember.RSVP.Promise(function(resolve) {
            Ember.$.ajax("/api/1.0/packs", {
                type: 'GET',
                success: function(json) {
                    resolve(json.response);
                }
            });
        });
    }
});

export default IndexRoute;