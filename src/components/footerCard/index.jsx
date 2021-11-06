import React from 'react'
import './styles.css'

const footerCard = ({ todoList, focusButton, onClick }) => {
  return (
    <div className="card footer">
      <div className="d-flex footer-padding">
        <span>
          {`${
            todoList.filter(
              (todo) => todo.completado === false || todo.completado === true
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
                    onClick={() => onClick('todos')}
                  >
                    Todos
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={
                      focusButton === 'ativo'
                        ? 'btn btn-light btn-selecionado'
                        : 'btn btn-light'
                    }
                    onClick={() => onClick('ativo')}
                  >
                    Ativos
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={
                      focusButton === 'completado'
                        ? 'btn btn-light btn-selecionado'
                        : 'btn btn-light'
                    }
                    onClick={() => onClick('completado')}
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
