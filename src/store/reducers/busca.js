const INITIAL_STATE = {
    videos: [],
    carregando: false,
    erro: false,
}


export default function busca(state = INITIAL_STATE , action) {
  switch (action.type) {
    case 'BUSCA_VIDEO_INICIO':
      return{
        videos: [],
        carregando: true,
        erro: false,
      }

    case 'BUSCA_VIDEOS_SUCESSO':
      return {
        videos: action.videos,
        carregando:false,
        erro:false,
      }
    case 'BUSCA_VIDEOS_ERRO':
      return {
        videos: [],
        carregando: false,
        erro: true,
      }
                
    default: return state;
  }
}