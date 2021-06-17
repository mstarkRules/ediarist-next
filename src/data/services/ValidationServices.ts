export const ValidationService = {
  cep(cep = ""): boolean {
    //procurando tudo aquilo que não é numero e subst
    //por strings vazias
    return cep.replace(/\D/g, "").length === 8;
  },
};
