# Cline Superpowers (adaptação local)

Este workspace usa uma adaptação enxuta do `obra/superpowers` para funcionar bem com o Cline.

## Regras de trabalho

1. **Antes de implementar qualquer mudança**, pare para confirmar objetivo, restrições e critérios de sucesso.
2. **Para trabalho criativo ou novas features**, faça uma etapa curta de brainstorming antes de editar código:
   - entenda o contexto atual
   - faça perguntas de clarificação quando necessário
   - proponha 2-3 abordagens quando houver ambiguidade
   - apresente a abordagem recomendada antes de implementar
3. **Antes de tocar em múltiplos arquivos ou lógica não trivial**, escreva um plano curto e sequencial.
4. **Prefira TDD quando houver lógica/comportamento novo ou bugfix**:
   - escrever teste que falha
   - confirmar a falha correta
   - implementar o mínimo para passar
   - refatorar mantendo verde
5. **Ao depurar**, não chute correções:
   - reproduza o problema
   - colete evidências
   - identifique causa raiz
   - só então proponha a correção
6. **Antes de concluir mudanças relevantes**, faça uma revisão final contra:
   - requisitos pedidos
   - riscos de regressão
   - consistência com padrões do projeto

## Fluxo recomendado

### 1. Brainstorming
- usar para features, refactors relevantes, mudanças de comportamento e decisões de arquitetura
- não começar implementação antes de alinhar o design

### 2. Writing plans
- quebrar implementação em passos pequenos
- citar arquivos exatos quando possível
- evitar placeholders vagos como "ajustar depois" ou "tratar edge cases"

### 3. Test-driven development
- obrigatório por padrão para feature/bugfix, exceto quando for apenas configuração ou documentação
- se código foi escrito antes do teste, reavaliar e voltar ao ciclo teste -> implementação

### 4. Systematic debugging
- toda falha inesperada pede investigação antes de correção
- correção sem causa raiz confirmada deve ser evitada

### 5. Requesting code review
- ao terminar algo relevante, revisar se a mudança atende ao pedido e se não deixou pendências críticas

## Limites desta adaptação

Esta adaptação **não instala o plugin oficial** do Superpowers dentro do Cline.
Ela replica o comportamento por **instruções locais de workspace**.

Isso significa:
- você ganha o fluxo mental/metodológico do Superpowers
- mas não depende de marketplace/plugin nativo do Codex
- e pode ajustar este arquivo conforme seu jeito de trabalhar

## Fonte

Inspirado em:
- `obra/superpowers/skills/using-superpowers`
- `obra/superpowers/skills/brainstorming`
- `obra/superpowers/skills/writing-plans`
- `obra/superpowers/skills/test-driven-development`
- `obra/superpowers/skills/systematic-debugging`
- `obra/superpowers/skills/requesting-code-review`
