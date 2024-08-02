import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

interface LinkAttributes {
    id: number;
    title: string;
    url: string;
    description: string;
    logoUrl?: string;
}

class Link extends Model<LinkAttributes> {}

Link.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Link',
});

export default Link;