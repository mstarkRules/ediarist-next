import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationServices";
import { ApiService } from "data/services/ApiService";

export default function userIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [loading, setLoading] = useState(false),
    [diarists, setDiarists] = useState([] as UserShortInterface[]),
    [diaristsRestantes, setDiaristsRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setLoading(true);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDiarists(data.diaristas);
      setDiaristsRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setLoading(false);
    } catch (error) {
      setErro("CEP não encontrado");
      setLoading(false);
    }
  }
  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diarists,
    buscaFeita,
    loading,
    diaristsRestantes,
  };
}
