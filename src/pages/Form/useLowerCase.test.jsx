import { renderHook, act } from "@testing-library/react-hooks";
import { useLowerCase } from "./useLowerCase";

describe('when rendered', () => {
    it('returns current initial value, lowercased', () => {
        const { result } = renderHook(() => useLowerCase('Test string'));
        expect(result.current.value).toEqual('test string');
    })

    it('changes the value and lowercases it', () => {
        const { result } = renderHook(() => useLowerCase('Test string'));
        act(() => result.current.update('Updated'));
        expect(result.current.value).toEqual('updated');
    })

    it('updates the value', () => {
        const { result, rerender } = renderHook(({ text }) => useLowerCase(text), {
            initialProps: {text: 'Test string'}
        });
        rerender({ text: 'Updated!' });
        expect(result.current.value).toEqual('updated!');
    })
})