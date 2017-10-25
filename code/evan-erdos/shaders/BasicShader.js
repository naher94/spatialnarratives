/// @author mrdoob <http://www.mrdoob.com>
///
/// Simple test shader
///
export default {

    uniforms: { },

    vertexShader: `
        void main() {
            gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }`,

    fragmentShader: `
        void main() {
            gl_FragColor = vec4(1.0,0.0,0.0,0.5);
        }`
}
