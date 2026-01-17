"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cep: "",
    numero: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
    nomePeca: "",
    tempo: "",
    peso: "",
    link: "",
    cor: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function update(field) {
    return (e) =>
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const tempoHoras = Number.parseFloat(form.tempo);
    const pesoTotal = Number.parseFloat(form.peso);

    if (!form.nome || !form.whatsapp) {
      setResult(null);
      setError("Preencha seu nome e WhatsApp para continuar.");
      return;
    }

    if (!tempoHoras || !pesoTotal) {
      setResult(null);
      setError("Informe o tempo de impressao e o peso total da peca.");
      return;
    }

    const custoHora = 2.0;
    const margem = 1.5;
    const precoKg = 100.0;
    const custo = custoHora * tempoHoras + precoKg * (pesoTotal / 1000);
    const preco = custo * margem;

    setResult({
      preco,
      tempoHoras,
      pesoTotal,
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-[-80px] h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-[-80px] h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 shadow-sm">
                Simulador de orcamento
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
                Simule seu orcamento 3D em minutos, do jeito certo
              </h1>
              <p className="text-lg text-stone-700">
                Preencha os dados e receba uma estimativa clara para a sua
                impressao. Ajuste o tempo, o peso e a cor desejada.
              </p>

              <div className="rounded-2xl border border-emerald-200 bg-white/80 p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Quer um modelo pronto?
                </div>
                <a
                  className="mt-2 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/70 transition hover:-translate-y-0.5"
                  href="https://makerworld.com/pt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explorar modelos no MakerWorld
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Prazo medio
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-stone-900">
                    2-4 dias
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Materiais
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-stone-900">
                    PLA, PETG, ABS
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-lg backdrop-blur">
              <h2 className="font-display text-2xl font-semibold text-stone-900">
                Dados para o orcamento
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Informe os detalhes abaixo para gerar a estimativa.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Seu nome*
                  </label>
                  <input
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                    type="text"
                    placeholder="Nome completo"
                    value={form.nome}
                    onChange={update("nome")}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      WhatsApp*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="Somente numeros"
                      value={form.whatsapp}
                      onChange={update("whatsapp")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      CEP*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="00000000"
                      value={form.cep}
                      onChange={update("cep")}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Numero*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="Ex: 123"
                      value={form.numero}
                      onChange={update("numero")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Complemento (opcional)
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="Apto, bloco, sala"
                      value={form.complemento}
                      onChange={update("complemento")}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Rua*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      value={form.logradouro}
                      onChange={update("logradouro")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Bairro*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      value={form.bairro}
                      onChange={update("bairro")}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Cidade*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      value={form.cidade}
                      onChange={update("cidade")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Estado*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="UF"
                      value={form.estado}
                      onChange={update("estado")}
                    />
                  </div>
                </div>

                <details className="rounded-2xl border border-stone-200 bg-white/80 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-stone-800">
                    Como obter tempo e peso no MakerWorld?
                  </summary>
                  <p className="mt-2 text-sm text-stone-600">
                    Abra o modelo no MakerWorld, clique no perfil de impressao e
                    veja o tempo e o peso total da peca.
                  </p>
                  <img
                    className="mt-3 w-full rounded-xl border border-stone-200"
                    src="/images/tuto.png"
                    alt="Exemplo de onde encontrar tempo e peso no MakerWorld"
                  />
                </details>

                <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Nome da peca (opcional)
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="Ex: Suporte de celular"
                      value={form.nomePeca}
                      onChange={update("nomePeca")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Tempo (h)*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="number"
                      min={0}
                      step="0.1"
                      value={form.tempo}
                      onChange={update("tempo")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Peso total (g)*
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="number"
                      min={0}
                      step="1"
                      value={form.peso}
                      onChange={update("peso")}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Link do arquivo de impressao
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="url"
                      placeholder="https://makerworld.com"
                      value={form.link}
                      onChange={update("link")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Cor desejada (opcional)
                    </label>
                    <input
                      className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                      type="text"
                      placeholder="Ex: Preto, branco, translucido"
                      value={form.cor}
                      onChange={update("cor")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  Calcular orcamento
                </button>
              </form>

              {error ? (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-sm text-amber-900">
                  {error}
                </div>
              ) : null}

              {result !== null && (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
                  <h3 className="font-display text-lg font-semibold text-emerald-900">
                    Resumo do orcamento
                  </h3>
                  <div className="mt-3 grid gap-2 text-sm text-emerald-900">
                    <div>
                      <strong>Nome:</strong> {form.nome}
                    </div>
                    <div>
                      <strong>WhatsApp:</strong> {form.whatsapp}
                    </div>
                    <div>
                      <strong>Peca:</strong> {form.nomePeca || "-"}
                    </div>
                    <div>
                      <strong>Tempo:</strong> {result.tempoHoras} horas
                    </div>
                    <div>
                      <strong>Peso:</strong> {result.pesoTotal} g
                    </div>
                    <div>
                      <strong>Cor:</strong> {form.cor || "-"}
                    </div>
                    <div className="text-base font-semibold">
                      Valor estimado:{" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(result.preco)}
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-emerald-800/80">
                    * Valor estimado. O preco final pode variar apos analise.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
