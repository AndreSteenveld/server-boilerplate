
export default const <%= name %>Schema = {
	$schema: "http://json-schema.org/draft-04/schema#",
	
	title: "<%= name %>",
	description:
		`
			Schema for <%= name %> objects
			You can add additional documentation here this might or might not include why the object
			has been designed this way and constraints that can not be expressed using a schema?

			For more information about JSON-schemas you might want to visit:
			- http://json-schema.org/documentation.html
			- http://spacetelescope.github.io/understanding-json-schema/
			- http://jsonschema.net/#/
		`,

	type: "object",
	properties: { }
};
