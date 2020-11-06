import { Rebanho } from "../entitiesModels/Rebanho";

export const RebanhoViews = {
  render(rebanho: Rebanho) {
    return {
      id: rebanho.id,
      bezerros: rebanho.bezerros,
      bezerras: rebanho.bezerras,
      desmamados: rebanho.desmamados,
      desmamadas: rebanho.desmamadas,
      garrotes: rebanho.garrotes,
      garrotas: rebanho.garrotas,
      novilhos: rebanho.novilhos,
      novilhas: rebanho.novilhas,
      touros: rebanho.touros,
      vacas: rebanho.vacas,
      bois: rebanho.bois,
    };
  },
  renderMany(rebanhos: Rebanho[]) {
    return rebanhos.map((rebanho) => this.render(rebanho));
  },
};
