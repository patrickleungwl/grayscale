function getStyleContent() {
  return `
    html {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  `;
}

function getStyleNode() {
  const styleNode = document.createElement('style');
  styleNode.setAttribute('data-ref', 'gray-scale');
  styleNode.innerHTML = getStyleContent();
  return styleNode;
}

function removeStyle() {
  const head = document.head;
  const styleNodes = document.querySelectorAll('[data-ref="gray-scale"]');

  styleNodes.forEach(styleNode => {
    if (styleNode) {
      head.removeChild(styleNode);
    }
  });
}

function addStyle() {
  const head = document.head;
  const styleNode = getStyleNode();

  head.appendChild(styleNode);
}

function controlStyle() {
  chrome.storage.local.get({
    enabled: true
  }, options => {
    if (options.enabled) {
      removeStyle();
      addStyle(options);
    } else {
      removeStyle();
    }
  });
}

module.exports = {
  controlStyle
};
