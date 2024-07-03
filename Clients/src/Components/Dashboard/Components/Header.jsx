import React from 'react'

function Header({title, subTitle}) {
    return (
        <section class="pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="fs-2 mb-2">{title}</h1>
                        <p class="mb-0"> {subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header