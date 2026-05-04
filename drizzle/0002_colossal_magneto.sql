CREATE TABLE `emailConversations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`visitorEmail` varchar(320) NOT NULL,
	`visitorName` varchar(255) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`status` enum('open','replied','closed') NOT NULL DEFAULT 'open',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `emailConversations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `emailMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`conversationId` int NOT NULL,
	`sender` enum('customer','admin') NOT NULL,
	`senderEmail` varchar(320) NOT NULL,
	`senderName` varchar(255) NOT NULL,
	`subject` varchar(255),
	`message` text NOT NULL,
	`attachmentUrl` varchar(512),
	`isRead` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `emailMessages_id` PRIMARY KEY(`id`)
);
