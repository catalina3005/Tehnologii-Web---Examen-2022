import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './bazadateexamen.db',
    define: {
        timestamps : false
    }
});
/*Definesc modelele*/
const crewMember = sequelize.define('crewMember',{
    id: {
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nume : {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            min: 3
        }
    },
    rol:{
        type:Sequelize.ENUM('CAPTAIN', 'BOATSWAIN'),
        allowNull: false,
    }
    
    
});

const ship = sequelize.define('ship',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nume : {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            min: 5}
    },
    displacement: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 50
        }
    }
    
});

ship.hasMany(crewMember,{foreignKey: 'shipID'});
crewMember.belongsTo(ship, {foreignKey: 'shipID'});


async function initialize() {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
}

export {
    initialize,
    crewMember,
    ship
}

