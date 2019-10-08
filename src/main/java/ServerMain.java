import static spark.Spark.*;


public class ServerMain {
	
	final static Model model = new Model();
	
	public static void main(String[] args) {
		
		ProcessBuilder process = new ProcessBuilder();
		Integer port;
		if(process.environment().get("port") != null) {
			port = Integer.parseInt(process.environment().get("port"));
		} else { 
			port = 5555;
		};
		port(port);
		
		staticFileLocation("/public");
				
		Controller controller = new Controller(model);
		
		controller.buscarAtomo();
		
	}
	
	

}
