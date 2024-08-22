exports.up = (pgm) => {
  pgm.createType("status", ["published", "draft"]);
  pgm.createTable("stories", {
    id: {
      type: "SERIAL",
      primaryKey: true,
    },
    title: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    author: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    synopsis: {
      type: "TEXT",
      notNull: true,
    },
    category: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    story_cover: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    tags: {
      type: "JSONB",
      notNull: true,
    },
    status: {
      type: "status",
      notNull: true,
      default: "draft",
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("stories");
  pgm.dropType("status");
};
