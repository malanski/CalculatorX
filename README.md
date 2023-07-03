<div align="center">
  
# CalculatorX
  
</div>
  
<div align="right">  
  
![CalculatorX](https://github.com/malanski/images/raw/main/calculator.png)  
  
</div>  
  

CalculatorX is a responsive web application built using HTML, CSS (SASS), and JavaScript. The project aims to create an online calculator that performs basic arithmetic calculations. It allows users to input numbers and perform operations like addition, subtraction, multiplication, and division.

## Learning Objectives

The primary objectives of this educational project are as follows:

1. Create an Online Calculator: Develop a fully functional web-based calculator accessible to users worldwide.

2. Use JavaScript: Apply JavaScript programming to implement the calculator's core functionality, enabling it to perform calculations based on user input.

3. Customize Design: Utilize HTML and CSS (SASS) to create an aesthetically pleasing and responsive design for the calculator.

## Technologies Used

- HTML5
- CSS3 (SASS)
- JavaScript
- FontAwesome
- Git
- GitHub

## Code Sample

The JavaScript code below demonstrates the essential functions of the calculator:

```javascript
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado).toFixed(2);
    } else {
        document.getElementById('resultado').innerHTML = "Empty...";
    }
}
```

## Styling

The calculator has been styled using CSS (SASS) to create an attractive and user-friendly interface. It features a black and green gradient background, responsive layout, and buttons with hover effects.

## Deployment

The CalculatorX project can be deployed and hosted on platforms like GitHub Pages or any web server. Users can access the calculator through the provided link.

## Try It Out

[Live Demo of CalculatorX](https://your-username.github.io/calculatorx)

## Learnings

Through this project, I have gained valuable experience in building a responsive web application using HTML, CSS (SASS), and JavaScript. I learned how to handle user input, perform calculations, and style the calculator for an enhanced user experience.

## Contribution

This project is open-source, and contributions are welcome. If you'd like to contribute or report issues, please create a pull request on the GitHub repository.

## License

CalculatorX is licensed under the MIT License. Please refer to the LICENSE file for more details.

---

With this README.md, users and developers can understand the purpose of the CalculatorX project, its objectives, technologies used, code samples, and how to access the live demo or contribute to the project.

<div align="left" margin-top="-150px">
    
| <img height="100px" src="https://avatars.githubusercontent.com/u/87362996?v=4"> | <a href="https://github.com/malanski">Ulisses Malanski</a> " - Web Developer/Visual Artist and musician in his spare time.  |
| ----------- | ----------- |
|  |  |



