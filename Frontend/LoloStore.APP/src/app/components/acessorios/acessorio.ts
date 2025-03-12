export interface Acessorio {
  id: number,
  nome: string,
  preco: number,
  descricao: string,
  classificacao: string,
  imagem?: string[],
  favorito: boolean
}
