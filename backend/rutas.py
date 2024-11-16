from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
db = SQLAlchemy(app)
CORS(app)

class Usuarios(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    correo = db.Column(db.String(100), unique=True)  # Añadir campo de correo
    contra = db.Column(db.String(100))

@app.route('/usuarios', methods=['GET'])
def get_datos():
    all_data = Usuarios.query.all()
    return jsonify([{'id': d.id, 'nombre': d.nombre, 'correo': d.correo} for d in all_data])

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    correo = data.get('email')
    contra = data.get('password')

    usuario = Usuarios.query.filter_by(correo=correo).first()

    if usuario and usuario.contra == contra:
        return jsonify({'success': True, 'message': 'Inicio de sesión exitoso'})
    else:
        return jsonify({'success': False, 'message': 'Credenciales incorrectas'}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(port=5000)
