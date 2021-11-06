import React from 'react'

const footerCard = ({ todoList, focusButton, setfocusButton }) => {
  return (
    <div className="card">
      <div className="d-flex footer-padding">
        <span>
          {`${
            todoList.filter(
              (todo) => todo.status === 'novo' || todo.status === 'completado'
            ).length
          } Itens faltando`}
        </span>
        <div className="d-flex right-footer-menu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <button
                    type="button"
                    className={
                      focusButton === 'todos'
                        ? 'btn btn-light btn-selecionado'
                        : 'btn btn-light'
                    }
                    onClick={() => setfocusButton('todos')}
                  >
                    Todos
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={
                      focusButton === 'ativos'
                        ? 'btn btn-light btn-selecionado'
                        : 'btn btn-light'
                    }
                    onClick={() => setfocusButton('ativos')}
                  >
                    Ativos
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={
                      focusButton === 'completados'
                        ? 'btn btn-light btn-selecionado'
                        : 'btn btn-light'
                    }
                    onClick={() => setfocusButton('completados')}
                  >
                    Completados
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default footerCard
