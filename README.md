# BOTOES DESABILITADOS
🔐APRENDA A DESABILITAR OS BOTÕES DO SEU FORMULÁRIO COMO VALIDAÇÃO! 

<img src="./IMAGENS/FOTO_1.png" align="center" width="500"> <br><br>
<img src="./IMAGENS/FOTO_2.png" align="center" width="500"> <br><br>
<img src="./IMAGENS/FOTO_3.png" align="center" width="500"> <br>

## DESCRIÇÃO E RECURSOS:
Este é um aplicativo simples que demonstra como desabilitar e habilitar botões com base na entrada do usuário e exibir os dados inseridos em um formulário.

1. **Entrada de Usuário:** O usuário pode inserir seu nome e idade nos campos de texto fornecidos.
2. **Botões Desabilitados:** Os botões `EXIBIR` e `LIMPAR` inicialmente estão desabilitados até que ambos os campos (nome e idade) sejam preenchidos.
3. **Feedback Visual:** Os botões mudam de estilo (cor) quando estão habilitados para indicar que podem ser clicados.
4. **Exibição de Dados:** Quando o usuário clica no botão `EXIBIR`, os dados inseridos (nome e idade) são exibidos abaixo do formulário.

## MANUAL:
### O que é um botão desabilitado?
Um botão desabilitado em um formulário web é um botão que é incapaz de ser clicado ou interagido enquanto certas condições não forem atendidas. Ele geralmente é usado para evitar a submissão de dados incompletos ou inválidos, garantindo que o usuário preencha todos os campos necessários antes de prosseguir.

### Como colocar um botão desabilitado?
1. **Defina o botão como desabilitado:**
   Isso é feito no código HTML, geralmente usando o atributo `disabled`. Por exemplo:
   ```html
   <button type="submit" id="submitBtn" disabled>Enviar</button>
   ```

2. **Habilite o botão quando as condições necessárias forem atendidas:**
   Isso é geralmente feito usando JavaScript. Você pode adicionar ou remover o atributo `disabled` com base nas ações do usuário. Por exemplo:
   ```javascript
   document.getElementById('submitBtn').disabled = false; // Habilita o botão
   ```

### Para que serve um botão desabilitado?
1. **Validação de Formulário:**
   Um botão desabilitado pode ser usado para garantir que todos os campos obrigatórios em um formulário sejam preenchidos antes que o formulário possa ser enviado.

2. **Prevenção de Ações Prematuras:**
   Em certos casos, como em um jogo ou uma etapa de um processo, um botão desabilitado pode impedir que o usuário execute uma ação antes que esteja pronto ou antes que todas as condições necessárias sejam atendidas.

3. **Melhoria da Experiência do Usuário:**
   O uso de botões desabilitados ajuda a orientar e direcionar o usuário, indicando visualmente quais ações são possíveis ou permitidas em determinado momento.

4. **Redução de Erros:**
   Ao evitar que o usuário envie um formulário com campos obrigatórios em branco ou com dados inválidos, os botões desabilitados ajudam a reduzir erros e retrabalhos.

## Conclusão:
Os botões desabilitados são uma parte importante da interface de usuário em formulários web, ajudando a melhorar a usabilidade e a evitar erros. Ao definir a disponibilidade de botões com base em condições específicas, os desenvolvedores podem criar uma experiência mais intuitiva e eficiente para os usuários.

## COMO USAR?
### BAIXANDO O PROJETO:
* Clone o repositório para o seu sistema local:

```bash
git clone https://github.com/VILHALVA/BOTOES-DESABILITADOS.git
```

* Navegue até o diretório do projeto.

```bash
cd BOTOES-DESABILITADOS
```

* Descompacte o arquivo ZIP (se você baixou manualmente):

```bash
unzip BOTOES-DESABILITADOS.zip
``` 

### EXECUTANDO O PROJETO:
1. Abra o arquivo `CODIGO.html` em seu navegador de preferência.
2. Insira seu nome e idade nos campos de texto fornecidos.
3. O botão `EXIBIR` estará desabilitado até que ambos os campos (nome e idade) sejam preenchidos.
4. Assim que ambos os campos forem preenchidos, o botão `EXIBIR` ficará habilitado. Clique nele para exibir os dados inseridos abaixo do formulário.
5. O botão `LIMPAR` estará habilitado assim que algum dos campos estiver preenchido. Clique nele para limpar os campos e ocultar os dados exibidos.

## NÃO SABE?
- Entendemos que para manipular arquivos em `HTML`, `CSS` e outras linguagens relacionadas, é necessário possuir conhecimento nessas áreas. Para auxiliar nesse aprendizado, oferecemos cursos gratuitos disponíveis:
* [Curso de HTML e CSS](https://github.com/VILHALVA/CURSO-DE-HTML-E-CSS)
* [Curso de JavaScript](https://github.com/VILHALVA/CURSO-DE-JAVASCRIPT)
* [Confira mais cursos](https://github.com/VILHALVA?tab=repositories&q=+topic:CURSO)

## CREDITOS:
- [PROJETO CRIADO PELO VILHALVA](https://github.com/VILHALVA)
- [ESTÁ DISPONIVEL NO SITE](https://vilhalva.github.io/STYLER/STYLER.html)

