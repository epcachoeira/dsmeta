export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

/*
Exporta uma variável que tenta recuperar o valor de uma variável de ambiente.
Caso não tenha sucesso, pega o valor padrão (após o ??) como conteúdo
*/