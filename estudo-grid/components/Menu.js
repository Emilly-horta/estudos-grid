import Image from "next/image";
import styles from "../styles/Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.estrutura}>
      <div className={styles.header}>
        <a href="" className={styles.logo}>
          <Image
            src="/src/img/wildbeast.png"
            width={180}
            height={40}
            alt="logo site"
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Animais</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a>
                <Image src="/src/img/icones/cervo.png" height={80} width={80}/>
              </a>
            </li>

            <li>
              <a>
                <Image src="/src/img/icones/leao.png"height={80} width={80}/>
              </a>
            </li>


            <li>
              <a>
                <Image src="/src/img/icones/gato.png" height={80} width={80}/>
              </a>
            </li>

            <li>
              <a>
                <Image src="/src/img/icones/vaca.png" height={80} width={80}/>
              </a>
            </li>


            <li>
              <a>
                <Image src="/src/img/icones/ovelha.png" height={80} width={80}/>
              </a>
            </li>


            <li>
              <a>
                <Image src="/src/img/icones/abelha.png" height={80} width={80}/>
              </a>
            </li>


          </ul>
        </nav>
      </div>
    </div>
  );
}
