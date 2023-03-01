import styles from "../styles/Menu.module.scss";
import Image from "next/image";

export default function Main() {
  return (
    <div className={styles.estrutura}>
      <div className={styles.header}>
        <a href="" className={styles.logo}>
          <Image
            src="/src/img/wildbeast.png"
            width={180}
            height={40}
            alt="logo site"
            className={styles.logo}
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
      </div>
      <nav className={styles.sidenav}>
        <ul>
          <li>
            <a>
              <Image
                src="/src/img/icones/cervo.png"
                height={80}
                width={80}
                className={styles.img}
              />
            </a>
          </li>

          <li>
            <a>
              <Image
                src="/src/img/icones/leao.png"
                height={80}
                width={80}
                className={styles.img}
              />
            </a>
          </li>

          <li>
            <a>
              <Image
                src="/src/img/icones/gato.png"
                height={80}
                width={80}
                className={styles.img}
              />
            </a>
          </li>

          <li>
            <a>
              <Image
                src="/src/img/icones/vaca.png"
                height={80}
                width={80}
                className={styles.img}
              />
            </a>
          </li>

          <li>
            <a>
              <Image
                src="/src/img/icones/ovelha.png"
                height={80}
                width={80}
                className={styles.img}
              />
            </a>
          </li>

          <li>
            <a>
              <Image
                src="/src/img/icones/abelha.png"
                height={80}
                width={80}
                className={styles.img}
              />
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Lobo Cinza</h1>
          <span>da familia canis lupus</span>
        </div>

        <div className={styles.caracteristicas}>
          <div>
            <span className={styles.numero}>72</span>
            <span className={styles.rotulo}>kg</span>
          </div>

          <div>
            <span className={styles.numero}>13</span>
            <span className={styles.rotulo}>age</span>
          </div>
        </div>

        <p className={styles.colWide}>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico
        </p>

        <Image
          src="/src/img/wolf1.jpg"
          width={300}
          height={400}
          alt="lobo1"
          className={styles.loboimg}
        />
        <p className={styles.destaque}>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
        </p>

     
        <p>
          O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a
          aumentar proporcionalmente com a latitude, como previsto pela teoria
          de Christian Bergmann. Em geral, a altura, medida a partir dos ombros,
          varia de 60 a 95 centímetros.
        </p>

        <Image
          src="/src/img/wolf2.jpg"
          width={300}
          height={400}
          alt="lobo1"
          className={styles.loboimg}
        />
        <p>
          O peso varia geograficamente. Em média, os lobos europeus pesam 38,5
          kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes,
          25 kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no
          Alasca, Canadá,[8] e na antiga União Soviética.
        </p>

        <blockquote className={styles.citacao}>
          <p>
            “Há algo no uivar do lobo que tira um homem do aqui e agora e o
            transporta para uma floresta da mente.”
          </p>
        </blockquote>

        <ul className={styles.atributos}>
          <li>Surgiu: 12.000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 13 anos</li>
          <li>Macho adulto: 80kg</li>
          <li>Fêmea adulta: 55kg</li>
          <li>Família: Lupus</li>
        </ul>

        <div className={styles.informacoes}>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
        </div>

        <Image
          src="/src/img/wolf3.jpg"
          width={600}
          height={200}
          alt="lobo3"
          className={styles.colWide}
        />
      </div>

      <aside className={styles.anuncio}>
        <div className={styles.anuncioItem}>
          <Image
            src="/src/img/anuncio-1.jpg"
            alt="anuncio1"
            width={200}
            height={200}
            className={styles.anuncioimg}
          />
        </div>

        <div className={styles.anuncioItem}>
          <Image
            src="/src/img/anuncio-2.jpg"
            alt="anuncio2"
            width={200}
            height={200}
            className={styles.anuncioimg}
          />
        </div>
      </aside>
    </div>
  );
}
