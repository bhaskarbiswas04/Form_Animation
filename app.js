function animatedForm()
{
    const arrows = document.querySelectorAll(".fa-arrow-down");  // Selecting all the arrow-down functions.

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            console.log(parent);

            //Checks for Validation.
            if(input.type === 'text' && validateUser(input))
            {
                nextSlide(parent, nextForm);
            }

            else if(input.type === 'email' && validateEmail(input))
            {
                nextSlide(parent, nextForm);
            }

            else if(input.type === 'password' && validateUser(input))
            {
                nextSlide(parent, nextForm);
            }

            else
            {
                parent.style.animation = "shake 0.5s ease";
            }

            //Get rid of animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            });
        });
    });
}

//Function to check for Validate User.
function validateUser(user)
{
    if(user.value.length < 6)
    {
        console.log("Not enough Character");
        error('rgb(189, 87, 87)');
    }
    else
    {
        error('rgb(87, 189, 130)');
        return true;
    }
}

function validateEmail(email)
{
    const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(validation.test(email.value))
    {
        error('rgb(87, 189, 130)');
        return true;
    }
    else
    {
        error('rgb(189, 87, 87)');
    }
}

function nextSlide(parent, nextForm)
{
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color)
{
    document.body.style.backgroundColor = color;
}

animatedForm();