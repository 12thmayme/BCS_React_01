import React from 'react'

const Item = () => {
  return (
    <div>
      <div className="col-12 mb-5">
      <div className="card h-100">
        <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
        </div>
        <div className="card-footer">
          <a href="/" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Item
