---
layout: post
title: Code Runner
permalink: /code
---

<!-- CodeMirror CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/darcula.min.css">

<!-- CodeMirror JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/clike/clike.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js"></script>

<h2>💻 Code Runner</h2>

<label for="language">Language:</label>
<select id="language">
  <option value="python">Python</option>
  <option value="java">Java</option>
  <option value="javascript">JavaScript</option>
</select>

<textarea id="editor">print("Hello, world!")</textarea>
<br>
<button id="runBtn" class="large primary">▶ Run</button>
<pre id="output"></pre>

<script type="module">
import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

document.addEventListener("DOMContentLoaded", () => {
  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "python",
    theme: "darcula",
    indentUnit: 4,
    tabSize: 4
  });

  const langSelect = document.getElementById("language");
  const outputDiv = document.getElementById("output");

  // 🟦 Language switcher
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    if (lang === "python") {
      editor.setOption("mode", "python");
      editor.setValue("print('Hello, world!')");
    } else if (lang === "java") {
      editor.setOption("mode", "text/x-java");
      editor.setValue("public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, world!\");\n  }\n}");
    } else if (lang === "javascript") {
      editor.setOption("mode", "javascript");
      editor.setValue("console.log('Hello, world!');");
    }
  });

  // 🟢 Run button logic
  document.getElementById("runBtn").onclick = () => {
    const code = editor.getValue();
    const lang = langSelect.value;
    outputDiv.textContent = "⏳ Running...";

    // ✅ Choose backend URL per language
    let runURL;
    if (lang === "python") runURL = `${pythonURI}/run/python`;
    else if (lang === "java") runURL = `${javaURI}/run/java`;
    else if (lang === "javascript") runURL = `${pythonURI}/run/javascript`; // your new JS endpoint!

    // ✅ Prepare body
    const body = JSON.stringify({ code });

    // ✅ Send request
    const options = { ...fetchOptions, method: "POST", body };
    fetch(runURL, options)
      .then(res => res.json())
      .then(result => {
        const output = result.output || "[no output]";
        outputDiv.textContent = output;
      })
      .catch(err => {
        outputDiv.textContent = "⚠️ " + err.message;
      });
  };
});
</script>
