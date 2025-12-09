class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {
        let template = cardTemplate.content.cloneNode(true);
        template.querySelector('section > h3').innerText = this.getAttribute('title');
        this.shadow.replaceChildren(template);
    }

    static get observedAttributes() {
        return ['title'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Re-render', name, oldValue, newValue);
        this.render();
    }
}

customElements.define('info-card', InfoCard);
