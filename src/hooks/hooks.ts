import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const queryState = atom({
  key: "query",
  default: "",
});
const resultState = selector({
  key: "results",
  get: async ({ get }) => {
    const query = get(queryState);
    if (query) {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + query
      );
      const json = await res.json();
      return json.results;
    } else return [];
  },
});
///Hook searchPage

export function useSearch() {
  const params = useParams().query;
  const setRecoilValue = useSetRecoilState(queryState);
  const resultado = useRecoilValue(resultState);
  useEffect(() => {
    if (params) {
      setRecoilValue(params);
    }
  }, [params]);
  return resultado;
}

///Atoms state getItem

const idItem = atom({
  key: "idItem",
  default: "",
});

const itemGet = selector({
  key: "itemGet",
  get: async ({ get }) => {
    const params = get(idItem);
    if (params) {
      const res = await fetch("https://api.mercadolibre.com/items/" + params);
      const json = await res.json();

      return json;
    } else return undefined;
  },
});

///hook getItem
export function useGetItem() {
  const params = useParams();
  const id = params.id;
  const setValueInRecoil = useSetRecoilState(idItem);
  const resultado = useRecoilValue(itemGet);
  useEffect(() => {
    if (id) {
      setValueInRecoil(id);
    }
  });
  return resultado;
}

///////ESTO ERA DE PRUEBA PARA PODER MANIPULAR BIEN LOS OBJETOS DE DATA ASI LOS UILIZO EN EL DESAFIO Y PRACTICO LOS HOOKS ATOMS CUSTOM HOOKS :DDDDD
///hook prueba

const pruebaObj = atom({
  key: "prueba",
  default: "",
});

const getMyDate = selector({
  key: "getMyDate",
  get: ({ get }) => {
    const objeto = get(pruebaObj);
    // console.log("entro en getMyDate", objeto);
    if (objeto) {
      return objeto;
    } else return {};
  },
});

export function useMyDate(params) {
  const setDataInRecoil = useSetRecoilState(pruebaObj);
  const resultado = useRecoilValue(getMyDate);
  useEffect(() => {
    if (params) {
      setDataInRecoil(params);
    }
  }, [params]);
  return resultado;
}
