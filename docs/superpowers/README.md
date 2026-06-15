# Superpowers + Cline + Codex neste projeto

## Status encontrado no seu ambiente

O Cline **já está configurado** para usar o provider `openai-codex`.

Configuração detectada:
- pasta do Cline: `C:\Users\fonta\.cline`
- provider ativo em Plan/Act mode: `openai-codex`
- modelo configurado no provider: `gpt-5.5`
- workspace detectado: `c:\Users\fonta\Desktop\asms-landing`

## Arquivos relevantes do Cline

- `C:\Users\fonta\.cline\data\settings\providers.json`
- `C:\Users\fonta\.cline\data\settings\models.json`
- `C:\Users\fonta\.cline\data\globalState.json`

## Importante sobre segurança

Durante a inspeção eu confirmei que existem credenciais salvas na configuração local do Cline.
**Recomendo fortemente rotacionar essas chaves/tokens**, porque elas ficaram expostas em arquivo local durante a investigação.

## O que foi adaptado aqui

O repo oficial `obra/superpowers` foi trazido apenas como referência local em:

- `.superpowers-ref/`

Como o Superpowers oficial foi pensado para ambientes com suporte nativo a plugin/marketplace, neste projeto eu adaptei o fluxo por instruções de workspace:

- `docs/superpowers/CLINE-SUPERPOWERS.md`
- `CLAUDE.md` agora referencia esse arquivo

## Como usar no dia a dia

No Cline, trabalhe normalmente, mas comece prompts importantes com algo como:

### Para novas features

```text
Quero implementar X. Primeiro faça um brainstorming curto, proponha a melhor abordagem e só depois monte o plano de implementação.
```

### Para bugfix

```text
Estou vendo este bug: X. Faça debugging sistemático, encontre a causa raiz e depois siga TDD para corrigir.
```

### Para mudança maior

```text
Antes de editar código, escreva um plano curto em passos e depois execute passo a passo revisando riscos no final.
```

## Se você quiser trocar o modelo/provider do Cline

Hoje o Cline está usando `openai-codex` como provider principal.

Se quiser ajustar depois, revise:

### Provider
- arquivo: `C:\Users\fonta\.cline\data\settings\providers.json`
- campos principais:
  - `lastUsedProvider`
  - `providers.<nome>.settings.provider`
  - `providers.<nome>.settings.model`
  - `providers.<nome>.settings.baseUrl` (quando for OpenAI-compatible)

### Estado global
- arquivo: `C:\Users\fonta\.cline\data\globalState.json`
- campos principais:
  - `planModeApiProvider`
  - `actModeApiProvider`
  - `planModeApiModelId`
  - `actModeApiModelId`

## Resumo prático

- o **Codex via API já está funcionando no Cline**
- o **Superpowers não entra por plugin nativo no Cline** neste setup
- a solução mais estável aqui é **adaptar a metodologia por instruções locais**, o que já ficou documentado neste workspace
