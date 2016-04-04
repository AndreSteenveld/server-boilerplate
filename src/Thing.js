
const
	STATIC_VALUE   = Symbol( "The static value we are using" ),
	INSTANCE_VALUE = Symbol( "The instance value we are using" );

export default class Thing {

	static property = STATIC_VALUE;
	static method( ){ return this.property; }

	property = INSTANCE_VALUE;
	method( ){ return this.property; }

}
