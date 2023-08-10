@media (max-width:767px) {
    .icon {
        display: block !important;
        font-size: 20px;
    }

    header {
        width: 100%;
        margin-bottom: 0;
        display: flex;
        justify-content: space-evenly;
        /* display: grid;
        grid-template-rows: 1fr; */
        position: relative;

    }

    .parent {
        width: 100%;
        grid-template-columns: 1fr;
        /* gap: 10px; */
        padding-left: 20px;
    }

    .left_column {
        width: 100%;
    }

    .right_column {
        width: 80%;

    }

    .main_image {
        /* margin-top: 0; */
        width: 80%;
        height: 80%;
        border-radius: 1px;
        position: relative;
    }

    .main_image img {
        height: 100%;
        width: 100%;
        border-radius: 0px;
    }

    .main_image::after {
        content: "<";
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: var(--White);
        position: absolute;
        top: 50%;
        left: 1rem;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: bold;

    }

    .main_image::before {
        content: ">";
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: var(--White);
        position: absolute;
        top: 50%;
        right: 1rem;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: bold;
    }



    .description {
        width: 100%;
    }

    .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

    .price .two {
        text-align: center;
        height: 25px;
        padding: 5px;
        margin-left: 10px;
    }

    .price .three {
        justify-self: flex-end;
        /* margin-left: 300px; */
    }

    .image_row {
        display: none;
    }

    .last_line {
        flex-direction: column;
        height: 120px;
        width: 100%;
        align-items: center;
        justify-content: center;

    }

    .count_row,
    input {
        width: 100%;
        height: 50px;
    }

    input {
        margin-top: 20px;
    }

    header div {
        position: relative;
    }

    ul {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 2rem;
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 75%;
        z-index: 3;
        background-color: var(--White);
    }

    ul li {
        font-weight: bold;
        margin-top: 20px;
    }

    .logo:hover+nav ul {
        display: block;
        transition: 5s;
    }


    ul::after {
        content: "X";
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: var(--backgroud_color);
        position: absolute;
        top: 1rem;
        left: 2rem;
        font-size: 20px;
        font-weight: bold;
        color: var(--Grayish-blue);
    }


}