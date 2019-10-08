import java.util.LinkedList;
import java.util.List;

public class Model {
	
	private List<Atomo> atomos = new LinkedList<Atomo>();
	
	public void addAtomo(Atomo atomo) {
		atomos.add(atomo);
	}
	
	public Atomo buscarNome(Atomo nome) {
		for(Atomo atomo:atomos) {
			if(atomo.getNome().equals(nome)); return atomo;
		}
		return null;
	}

}
