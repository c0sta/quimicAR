import spark.ModelAndView;

import java.util.HashMap;

import static spark.Spark.get;

public class Controller<printWriter> {
	
	private Model model;
	
	public Controller(Model model) {
		this.model = model;
	}
	
	public void buscarAtomo() {
		get("/", (request, response) -> {
			return new ModelAndView(new HashMap(), "/public/index.html");
		}, new VelocityTemplateEngine());

		get("/atomo/oxigenio/camera", (request, response) -> {
			return new ModelAndView(new HashMap(), "/public/oxigenio.vtl");
		}, new VelocityTemplateEngine());

		get("/atomo/hidrogenio/camera", (request, response) -> {
			return new ModelAndView(new HashMap(), "/public/hidrogenio.vtl");
		}, new VelocityTemplateEngine());
	}

}
