import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MemberList(){
	return(
	<>
		<div className="container" style={{overflow:"auto"}}>
		<Button as={Link} to="/" eventKey="/" className="mt-2"><FontAwesomeIcon icon={faArrowLeft} className="ms-1"></FontAwesomeIcon>&nbsp;Back</Button>
		<h2 className="text-center mt-2 fw-bold fw-bold">We are happy to serve you.<br/>You can call and set appointment anytime. Thank you!</h2>
	    <Table striped bordered hover className="text-center mt-3 col-sm-3">
			      <thead className="mt-5">
			        <tr className="text-dark fw-bold">
			          <th>I.D&nbsp;#</th>
			          <th>Complete Name</th>
			          <th>Contact #</th>
			          <th>Action</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>0001</td>
			          <td>ABALLE, WILSON JR.</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0002</td>
			          <td>ALOWA, MELVIN</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0003</td>
			          <td> APAS, LUNIE</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0004</td>
			          <td>ARANETA, ROBERTO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0005</td>
			          <td>ARNEJO, EDGARDO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0006</td>
			          <td>BARRO, JERRY</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0007</td>
			          <td>BARRO, JOJE</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0008</td>
			          <td>BENSIG, MARVIN</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0009</td>
			          <td>BESSABELLA, ARTURO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0010</td>
			          <td>BORDAJE, EDWIN</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0011</td>
			          <td>BORDAJE, JOEL</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0012</td>
			          <td>BORDAJE, NEMUEL</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0013</td>
			          <td>BULAWIN, DENIS</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0014</td>
			          <td> CABAGTE, ROLANDO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0015</td>
			          <td>CAMAY, QUIRICO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0016</td>
			          <td>DIOLA, MELCHOR</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0017</td>
			          <td>CONCHAS, JUN JUN</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0018</td>
			          <td>DELA CRUZ, ELEZARDO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0019</td>
			          <td>DELA CRUZ, LOUIE</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0020</td>
			          <td>DELA PEñA, RITCHARD</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0021</td>
			          <td>DELA RAMA, GUILLERMO JR</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0022</td>
			          <td>DUARTE, RAYMON </td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0023</td>
			          <td>ENTIENZA, ROGELIO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0024</td>
			          <td>ESTORBA, JOEL</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0025</td>
			          <td>GICALI, ROLANDO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0026</td>
			          <td>GODINEZ, ROSELMA</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0027</td>
			          <td>INVENTO, REMEO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0028</td>
			          <td>JALIPA, MODONA</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0029</td>
			          <td>JALIPA, NICANOR</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0030</td>
			          <td>LABIDON, REY</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0031</td>
			          <td>LABRADA, MARK</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0032</td>
			          <td>LAPE, MODESTO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0033</td>
			          <td>LAYOS, JEMAR</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0034</td>
			          <td>LAYSON, MATEO JR.</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0035</td>
			          <td>LEPASANA, ROMEL</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0036</td>
			          <td> MONDEJAR, SIXTO JR.</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0037</td>
			          <td>MONTESCLAROS, CARLITO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0038</td>
			          <td>MOYANO, GABRIEL</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0039</td>
			          <td>NOYNAY, ROMULO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0040</td>
			          <td>MORALDE, ARJON</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0041</td>
			          <td>OGATIS, ALEXANDER</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0042</td>
			          <td> OGATIS, JOSELITO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0043</td>
			          <td>OSABEL, DANILOY</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0044</td>
			          <td>OTID, JAIME</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0045</td>
			          <td>PABLE, YUNIL</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0046</td>
			          <td>PANTALEON, ARIEL</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0047</td>
			          <td> PAPASIN, ALEXIS</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0048</td>
			          <td> PEñAFLOR, DOLL III</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0049</td>
			          <td> HINOGUIN, ARVIN</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>
			        <tr>
			          <td>0050</td>
			          <td>RIVERA, LAURIANO</td>
			          <td>09000000000</td>
			          <td><a href="tel:09324712415"><FontAwesomeIcon icon={faPhone} className="ms-1"></FontAwesomeIcon></a></td>
			        </tr>



			      </tbody>
			    </Table>
		</div>
	</>

		)
}