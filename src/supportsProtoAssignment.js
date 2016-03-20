let x = {};
let y = { supports: true };
try {
  x.__proto__ = y;
} catch (err) {}

export default function supportsProtoAssignment() {
  return x.supports || false;
};
