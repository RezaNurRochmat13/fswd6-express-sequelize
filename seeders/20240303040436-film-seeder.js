'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert(
			'Films',
			[
				{
					name: 'Starwars: Guardian of The Galaxy',
					publisher: 'Gramedia',
					author: 'Alex',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Pengabdi Setan',
					publisher: 'XXX',
					author: 'XXX',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Fast and The Furious',
					publisher: 'XXXX',
					author: 'Alex',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
