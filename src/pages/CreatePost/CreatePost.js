import styles from "./CreatePost.module.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.PreventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar novo Post</h2>
      <p>Escreva sobre o que deseja compartilhar</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input
            type="text"
            required
            placeholder="Pense num bom título"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem</span>
          <input
            type="text"
            required
            placeholder="Insira uma imagem que represente seu post"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo</span>
          <textarea
            name="body"
            placeholder="Digite o conteúdo do seu post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            required
            placeholder="Insira as tags separadas por vírgulas"
            name="tags"
            onChange={(e) => setTag(e.target.value)}
            value={image}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {/*!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>*/}
      </form>
    </div>
  );
};

export default CreatePost;
