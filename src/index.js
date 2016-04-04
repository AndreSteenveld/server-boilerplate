import application from "./application";

const
	port   = application.get( "port" ),
	server = application.listen( port );

server.on( "listening", ( ) => console.log( `Feathers application started on ${ application.get( "host" ) }:${ port }` ) );
