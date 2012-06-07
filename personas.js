(function($){

	var PersonaModel = Backbone.Model.extend({
		initialize: function(){
		
		},
		
		defaults: {
			nombre:'',
			apellido:''
		}
	});
	
	var PersonasCollection = Backbone.Collection.extend({
		model : PersonaModel
	});
	
	var PersonaView = Backbone.View.extend({
		el: $('body'),
		
		initialize: function(perCollection){
			_.bindAll(this, 'render','mostrar');
			this.collection = new PersonasCollection();			
			this.collection = perCollection;
	
			this.render();
		},
		
		render: function(){
		  $(this.el).append("<ul></ul>");
		  this.mostrar();
    },
				
		mostrar: function(){
		_.each(this.collection.models, function(persona){ 
        $('ul', this.el).append("<li>" + persona.get("nombre") + "</li>");
			});
		}

	
	});
	
	var carlos = new PersonaModel({ nombre: "Carlos", apellido: 'Paramio' });
	var fernando = new PersonaModel({ nombre: 'Fernando', apellido: 'Siles' });

  var personasCollection = new PersonasCollection();
  
  personasCollection.add(carlos);
  personasCollection.add(fernando);

	var personaView = new PersonaView(personasCollection);

	
})(jQuery);
